using AutoMapper;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Models;

namespace IdentityService.Automapping
{
    public class MyDetailProfile : Profile
    {
        public MyDetailProfile()
        {
            CreateMap<UpdateMyDetailsCommand, MyDetail>()
                .ReverseMap();

            CreateMap<MyDetail, MyDetailsDto>()
                .ReverseMap();

            CreateMap<MyDetailsDto, MyDetailsModel>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.AboutmeText, o => o.MapFrom(s => s.Text))
                .ForMember(d => d.AboutmeFont, o => o.MapFrom(s => s.Font))
                .ForMember(d => d.AboutmeFontSize, o => o.MapFrom(s => s.FontSize))
                .ForMember(d => d.AboutmeFontColor, o => o.MapFrom(s => s.FontColor))
                .ForMember(d => d.AboutmeFontStyleWeight, o => o.MapFrom(s => s.FontStyleWeight))
                .ForMember(d => d.AboutmeAlign, o => o.MapFrom(s => s.Align));

            CreateMap<MyDetailsDto, NewsLetterUserModel>()
                .ForMember(d => d.Id, o => o.MapFrom(s => s.Id))
                .ForMember(d => d.NewsletterText, o => o.MapFrom(s => s.Text))
                .ForMember(d => d.NewsletterFont, o => o.MapFrom(s => s.Font))
                .ForMember(d => d.NewsletterFontSize, o => o.MapFrom(s => s.FontSize))
                .ForMember(d => d.NewsletterFontColor, o => o.MapFrom(s => s.FontColor))
                .ForMember(d => d.NewsletterFontStyleWeight, o => o.MapFrom(s => s.FontStyleWeight))
                .ForMember(d => d.NewsletterAlign, o => o.MapFrom(s => s.Align));
        }
    }
}
