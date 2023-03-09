using Domain.Entites;
using Domain.Repositories;

namespace Domain.UseCases.UpdateDrillingEvent;

public class UpdateDrillingEventUseCase: IUpdateDrillingEventUseCase
{
    private readonly IDrillingEventRepository _drillingEventRepository;

    public UpdateDrillingEventUseCase(IDrillingEventRepository drillingEventRepository)
    {
        _drillingEventRepository = drillingEventRepository ?? throw new ArgumentNullException(nameof(drillingEventRepository));
    }

    public async Task Execute(UpdateDrillingEventRequest request, IPresenter<EmptyResponse> presenter)
    {
        var drillingEvent = new DrillingEvent(request.Id, request.StartDepth, request.EndDepth,
            (EventTypes) request.EventNumber);
        await _drillingEventRepository.Update(drillingEvent);
    }
}