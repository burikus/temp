using AutoMapper;

using Domain.Extensions;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Models;
using IdentityService.Protos;

namespace IdentityService.Automapping
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDetailsDto>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Name, o => o.MapFrom(s => s.UserName))
                .ForMember(d => d.Email, o => o.MapFrom(s => s.Email))
                .ForMember(d => d.NormalizedEmail, o => o.MapFrom(s => s.NormalizedEmail))
                .ForMember(d => d.FamilyName, o => o.MapFrom(s => s.FamilyName))
                .ForMember(d => d.FullName, o => o.MapFrom(s => s.FullName))
                .ForMember(d => d.Password, o => o.MapFrom(s => s.PasswordHash.StringToObject()))
                .ForMember(d => d.CreatedDate, o => o.MapFrom(s => s.CreatedDate))
                .ForMember(d => d.Roles, o => o.MapFrom(s => s.Roles))
                .ForMember(d => d.Active, o => o.MapFrom(s => s.Active))
                .ForMember(d => d.Avatar, o => o.MapFrom(s => s.Avatar))
                .ForMember(d => d.Phone, o => o.MapFrom(s => s.PhoneNumber))
                .ForMember(d => d.Subscription, o => o.MapFrom(s => s.Subscription))
                .ForMember(d => d.Admin, o => o.MapFrom(s => s.Roles.Any(x => x.Name == "Admin")));

            CreateMap<Role, Role>()  //RoleDto
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Name, o => o.MapFrom(s => s.NormalizedName));

            CreateMap<IEnumerable<User>, UsersResponse>()
                .ForMember(d => d.Items, o => o.MapFrom(s => s));
            CreateMap<User, UserResponse>()
                .ForMember(d => d.Uid, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Name, o => o.MapFrom(s => s.UserName))
                .ForMember(d => d.FamilyName, o => o.MapFrom(s => s.FamilyName))
                .ForMember(d => d.Email, o => o.MapFrom(s => s.Email));

            CreateMap<UserDetailsDto, UserInfoModel>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.Name, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.FamilyName, o => o.MapFrom(s => s.FamilyName))
                .ForMember(d => d.Email, o => o.MapFrom(s => s.Email))
                .ForMember(d => d.Avatar, o => o.MapFrom(s => s.Avatar != null ? Convert.ToBase64String(s.Avatar) : null))
                .ForMember(d => d.Admin, o => o.MapFrom(s => s.Admin))
                .ForMember(d => d.Active, o => o.MapFrom(s => s.Active))
                .ForMember(d => d.Phone, o => o.MapFrom(s => s.Phone))
                .ForMember(d => d.Subscription, o => o.MapFrom(s => s.Subscription))
                .ForMember(d => d.Password, o => o.MapFrom(s => s.Password));

            CreateMap<User, UserDetailDto>()
                .ForMember(d => d.Name, o => o.MapFrom(s => s.UserName))
                .ForMember(d => d.Email, o => o.MapFrom(s => s.Email));

            CreateMap<SubscribersDto, SubscribersModel>()
                .ForMember(d => d.Subscribed, o => o.MapFrom(s => s.Subscribed));

            CreateMap<UserDetailDto, UserDetailModel>()
                .ForMember(d => d.Name, o => o.MapFrom(s => s.Name))
                .ForMember(d => d.Email, o => o.MapFrom(s => s.Email))
                .ForMember(d => d.Checked, o => o.Ignore());
        }
    }
}
