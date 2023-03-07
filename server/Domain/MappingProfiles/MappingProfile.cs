using AutoMapper;
using Domain.Entites;

namespace Domain.MappingProfiles;

public class MappingProfile: Profile
{
    public MappingProfile()
    {
        CreateMap<DrillingEvent, DrillingEventDataModel>().ReverseMap();
    }
}