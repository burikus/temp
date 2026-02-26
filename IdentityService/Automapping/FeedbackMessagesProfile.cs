using AutoMapper;

using IdentityService.Domain.Commands;
using IdentityService.Domain.DataAccess.Entities;
using IdentityService.Domain.Dtos;
using IdentityService.Models;

namespace IdentityService.Automapping
{
    public class FeedbackMessagesProfile : Profile
    {
        public FeedbackMessagesProfile()
        {
            CreateMap<FeedbackMessage, FeedbackMessageDto>()
                .ForMember(dest => dest.Uid, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.UserUid, opt => opt.MapFrom(src => src.UserUid))
                .ForMember(dest => dest.AskedDateTime, opt => opt.MapFrom(s => s.AskedDateTime))
                .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.Message))
                .ForMember(dest => dest.SentDateTime, opt => opt.MapFrom(src => src.SentDateTime));

            CreateMap<FeedbackMessageDto, UpdateFeedbackMessageCommand>()
                .ForMember(dest => dest.Uid, opt => opt.MapFrom(src => src.Uid))
                .ForMember(dest => dest.UserUid, opt => opt.MapFrom(src => src.UserUid))
                .ForMember(dest => dest.AskedDateTime, opt => opt.MapFrom(s => s.AskedDateTime))
                .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.Message))
                .ForMember(dest => dest.SentDateTime, opt => opt.MapFrom(src => src.SentDateTime));

            CreateMap<UpdateFeedbackMessageCommand, FeedbackMessage>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Uid))
                .ForMember(dest => dest.UserUid, opt => opt.MapFrom(src => src.UserUid))
                .ForMember(dest => dest.AskedDateTime, opt => opt.MapFrom(s => s.AskedDateTime))
                .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.Message))
                .ForMember(dest => dest.SentDateTime, opt => opt.MapFrom(src => src.SentDateTime));

            CreateMap<CreateFeedbackMessageCommand, FeedbackMessage>()
               .ForMember(dest => dest.UserUid, opt => opt.MapFrom(src => src.UserUid))
               .ForMember(dest => dest.AskedDateTime, opt => opt.MapFrom(s => s.AskedDateTime))
               .ForMember(dest => dest.Message, opt => opt.MapFrom(src => src.Message));

            CreateMap<FeedbackMessageDto[], UserFeedbackMessageModel>()
                .ForMember(dest => dest.Items, opt => opt.MapFrom(src => src));
        }
    }
}
