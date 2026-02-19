using System;
using System.Text;

using Microsoft.IdentityModel.Tokens;

namespace ServiceConfiguration.Options.Identity
{
    public class TokenValidationOptions
    {
        public SecurityKey SymmetricSigningKey { get; }
        public string Issuer { get; }
        public string LifeTime { get; }

        internal TokenValidationOptions(
            string issuer,
            SecurityKey signingKey)
        {
            if (string.IsNullOrWhiteSpace(issuer))
            {
                throw new ArgumentNullException($"{nameof(Issuer)} is required in order to generate a JWT!");
            }

            Issuer = issuer;
            SymmetricSigningKey = signingKey ??
                         throw new ArgumentNullException($"{nameof(SymmetricSigningKey)} is required in order to generate a JWT!");
		}

        public TokenValidationOptions(TokenValidationConfiguration options)
        {
            if (string.IsNullOrWhiteSpace(options.Issuer))
            {
                throw new ArgumentNullException($"{nameof(Issuer)} is required in order to generate a JWT!");
            }

            if (string.IsNullOrWhiteSpace(options.Secret))
            {
                throw new ArgumentNullException($"{nameof(SymmetricSigningKey)} is required in order to generate a JWT!");
            }

			if (string.IsNullOrWhiteSpace(options.LifeTime))
			{
				throw new ArgumentNullException($"{nameof(LifeTime)} is required in order to generate a JWT!");
			}

			Issuer = options.Issuer;
            SymmetricSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(options.Secret));
            LifeTime = options.LifeTime;
        }
    }
}
