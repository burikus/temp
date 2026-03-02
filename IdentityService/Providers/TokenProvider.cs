using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

using Domain.Constants;
using Domain.Interfaces;

using IdentityService.Interfaces;
using IdentityService.Models;

using Microsoft.IdentityModel.Tokens;

using ServiceConfiguration.Options.Identity;

namespace IdentityService.Providers
{
    public class TokenProvider : ITokenProvider
    {
        private readonly IDateTimeProvider _dateTimeProvider;
        private readonly JwtOptions _tokenOptions;
        private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler;

        public TokenProvider(
            JwtOptions tokenOptions,
            IDateTimeProvider dateTimeProvider,
            JwtSecurityTokenHandler jwtSecurityTokenHandler)
        {
            _tokenOptions = tokenOptions ??
                            throw new ArgumentNullException($"An instance of valid {nameof(JwtOptions)} must be passed in order to generate a JWT!");

            _dateTimeProvider = dateTimeProvider ?? throw new ArgumentNullException(nameof(dateTimeProvider));
            _jwtSecurityTokenHandler = jwtSecurityTokenHandler ?? throw new ArgumentNullException(nameof(jwtSecurityTokenHandler));
        }

        public JwtModel Generate(UserJwtModel user)
        {
            var expiration = TimeSpan.FromMinutes(_tokenOptions.TokenExpiryInMinutes);
            var expires = _dateTimeProvider.UtcNow.Add(expiration);

            var jwt = new JwtSecurityToken(
                _tokenOptions.Issuer,
                _tokenOptions.Audience,
                GetClaims(user),
                _dateTimeProvider.UtcNow,
                expires,
                new SigningCredentials(
                    _tokenOptions.SymmetricSigningKey,
                    SecurityAlgorithms.HmacSha256));

            return new JwtModel
            {
                AccessToken = _jwtSecurityTokenHandler.WriteToken(jwt),
                Expires = (int)expiration.TotalSeconds
            };
        }

        private static IEnumerable<Claim> GetClaims(UserJwtModel user)
        {
            var claims = new List<Claim>(user.RoleNames.Count() + 2)
            {
                new(Claims.Subject , user.Id.ToString())
            };

            claims.AddRange(user.RoleNames.Select(role => new Claim(Claims.Role, role)));

            return claims;
        }
    }
}
