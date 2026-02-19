using System;
using System.Security.Cryptography;
using System.Text;

using Microsoft.IdentityModel.Tokens;

namespace ServiceConfiguration.Options.Identity
{
    public sealed class JwtOptions
    {
        public SecurityKey SymmetricSigningKey { get; }
        public SecurityKey AsymmetricSigningKey { get; }
        public SecurityKey EncryptionKey { get; }
        public string Issuer { get; }
        public string Audience { get; }
        public int TokenExpiryInMinutes { get; }

        internal JwtOptions(string issuer,
            string audience,
            SecurityKey signingKey,
            SecurityKey encryptionKey,
            SecurityKey asymmetricSigningKey,
            int tokenExpiryInMinutes = 360)
        {
            if (string.IsNullOrWhiteSpace(audience))
            {
                throw new ArgumentNullException($"{nameof(Audience)} is required in order to generate a JWT!");
            }

            if (string.IsNullOrWhiteSpace(issuer))
            {
                throw new ArgumentNullException($"{nameof(Issuer)} is required in order to generate a JWT!");
            }

            Audience = audience;
            Issuer = issuer;
            SymmetricSigningKey = signingKey ??
                         throw new ArgumentNullException($"{nameof(SymmetricSigningKey)} is required in order to generate a JWT!");

            EncryptionKey = encryptionKey ??
                            throw new ArgumentNullException($"{nameof(SymmetricSigningKey)} is required in order to generate a JWT!");

            AsymmetricSigningKey = asymmetricSigningKey ??
                                   throw new ArgumentNullException($"{nameof(SymmetricSigningKey)} is required in order to generate a JWT!");

            TokenExpiryInMinutes = tokenExpiryInMinutes;
        }

        public JwtOptions(
            string issuer,
            string audience,
            string rawSigningKey,
            string rawEncryptionKey,
            int tokenExpiryInMinutes = 360)
            : this(issuer,
                audience,
                new SymmetricSecurityKey(Encoding.ASCII.GetBytes(rawSigningKey)),
                new SymmetricSecurityKey(Encoding.ASCII.GetBytes(rawEncryptionKey)),
                new RsaSecurityKey(new RSACryptoServiceProvider(512)),
                tokenExpiryInMinutes)
        { }
    }
}
