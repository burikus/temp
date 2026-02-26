using AutoMapper;

using Domain.Models;

namespace IdentityService.AutoMapping
{
    public class ApiCollectionResultModelProfile : Profile
    {
        public ApiCollectionResultModelProfile()
        {
            CreateMap(typeof(IEnumerable<>), typeof(ApiCollectionResultModel<>))
                .ForMember(nameof(ApiCollectionResultModel<object>.Items), opt => opt.MapFrom(src => src));
        }
    }
}
