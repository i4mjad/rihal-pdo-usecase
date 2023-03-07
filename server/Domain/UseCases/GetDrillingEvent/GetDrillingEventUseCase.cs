using Domain.Entites;
using Domain.Repositories;
using Domain.UseCases.AddDrillingEvent;

namespace Domain.UseCases.GetDrillingEvent;

public class GetDrillingEventUseCase: IGetDrillingEventUseCase
{
    private readonly IDrillingEventRepository _drillingEventRepository;

    public GetDrillingEventUseCase(IDrillingEventRepository drillingEventRepository)
    {
        _drillingEventRepository = drillingEventRepository ?? throw new ArgumentNullException(nameof(drillingEventRepository));
    }

    

    private EventTypes GetEventNameByIndex(int requestEventTypeNumber)
    {
        return (EventTypes)requestEventTypeNumber;
    }

    public async Task Execute(GetDrillingEventRequest request, IPresenter<GetDrillingEventResponse> presenter)
    {
        var drillingEvent = await _drillingEventRepository.Get(request.Id);
        presenter.Success(new GetDrillingEventResponse(drillingEvent));
    }
}