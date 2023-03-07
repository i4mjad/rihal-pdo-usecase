using Domain.Entites;
using Domain.Repositories;

namespace Domain.UseCases.AddDrillingEvent;

public class AddDrillingEventUseCase: IAddDrillingEventUseCase
{
    private readonly IDrillingEventRepository _drillingEventRepository;

    public AddDrillingEventUseCase(IDrillingEventRepository drillingEventRepository)
    {
        _drillingEventRepository = drillingEventRepository ?? throw new ArgumentNullException(nameof(drillingEventRepository));
    }

    public async Task Execute(AddDrillingEventRequest request)
    {
        var drillingEvent = new DrillingEvent(Guid.NewGuid(), request.StartDepth, request.EndDepth,
            GetEventNameByIndex(request.EventTypeNumber));
        await _drillingEventRepository.Create(drillingEvent);
    }

    private EventTypes GetEventNameByIndex(int requestEventTypeNumber)
    {
        return (EventTypes)requestEventTypeNumber;
    }
}