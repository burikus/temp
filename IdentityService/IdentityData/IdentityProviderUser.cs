using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.IdentityData
{
    public class IdentityProviderUser : IdentityUser
    {
        private string _name;
        private string _givenName;
        private string _familyName;
        public bool Active { get; set; }

        [BackingField(nameof(_givenName))]
        public string GivenName
        {
            get => _givenName;
            set
            {
                _givenName = value.Trim();
                _name = ConcatFullName(_givenName, _familyName);
            }
        }

        [BackingField(nameof(_familyName))]
        public string FamilyName
        {
            get => _familyName;
            set
            {
                _familyName = value.Trim();
                _name = ConcatFullName(_givenName, _familyName);
            }
        }

        [BackingField(nameof(_name))]
        public string Name
        {
            get => _name;
            set
            {
                _name = value.Trim();
                _givenName = ExtractGivenName(_name);
                _familyName = ExtractFamilyName(_name);
            }
        }

        public bool EmailConfirmationExpired { get; set; }

        public void UpdateName(string name, string giveName, string familyName)
        {
            if (string.IsNullOrEmpty(name))
            {
                GivenName = giveName;
                FamilyName = familyName;
            }
            else
            {
                Name = name;
            }
        }

        private static string ExtractGivenName(string name)
        {
            if (name == null) return null;

            if (string.IsNullOrEmpty(name)) return string.Empty;

            var firstComma = name.IndexOf(',');
            if (firstComma >= 0) return name[(firstComma + 1)..].Trim();

            var firstSpace = name.IndexOf(' ');
            return firstSpace >= 0 ? name[..firstSpace].Trim() : name;
        }

        private static string ExtractFamilyName(string name)
        {
            if (name == null) return null;

            if (string.IsNullOrEmpty(name)) return string.Empty;

            var firstComma = name.IndexOf(',');
            if (firstComma >= 0) return name[..firstComma].Trim();

            var firstSpace = name.IndexOf(' ');
            return firstSpace >= 0 ? name[(firstSpace + 1)..].Trim() : string.Empty;
        }

        private static string ConcatFullName(string givenName, string familyName)
        {
            if (givenName == null && familyName == null) return null;

            return $"{givenName?.Trim() ?? string.Empty} {familyName?.Trim() ?? string.Empty}".Trim();
        }

        public DateTime? CreationEmailConfirmationLinkDate { get; set; }

        public IdentityProviderUser OnConfirmationEmailSent(DateTime creationEmailConfirmationLinkDate)
        {
            CreationEmailConfirmationLinkDate = creationEmailConfirmationLinkDate;
            EmailConfirmationExpired = false;

            return this;
        }
    }
}
