using AutoMapper;
using Domain.Entites;

namespace Domain.MappingProfiles;

public class MappingProfile: Profile
{
    public MappingProfile()
    {
        CreateMap<DrillingEvent, DrillingEventDataModel>().ReverseMap();
        CreateMap<DrillingEventDataModel, DrillingEvent>().ConstructUsing(x =>
            new DrillingEvent(Guid.Parse(x.Id), x.StartDepth, x.EndDepth, (EventTypes) x.EventType));
    }
}