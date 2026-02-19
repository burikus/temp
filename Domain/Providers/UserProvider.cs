using Domain.Constants;
using Domain.Interfaces;

namespace Domain.Providers
{
    public class UserProvider : IUserProvider
	{
		private readonly IHttpContextAccessor _context;

		public UserProvider(IHttpContextAccessor context)
		{
			_context = context ?? throw new ArgumentNullException(nameof(context));
		}

		public Guid GetUserIdentifier()
		{
			Guid.TryParse(_context.HttpContext!.User.Claims.FirstOrDefault(x=>x.Type.Contains("nameidentifier"))?.Value, out Guid uid);
            return uid;
		}

		public bool IsAdmin()
		{			
            return _context.HttpContext!.User.HasClaim(x => x.Value == RoleName.Admin);
		}

		public bool IsUser()
		{
			return _context.HttpContext!.User.HasClaim(x => x.Value == RoleName.User);
		}

		public bool IsAuthenticated()
		{
            return _context.HttpContext!.User.Identity.IsAuthenticated;
        }
	}
}
