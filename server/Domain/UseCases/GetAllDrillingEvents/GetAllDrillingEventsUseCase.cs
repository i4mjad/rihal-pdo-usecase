using Domain.Entites;
using Domain.Repositories;

namespace Domain.UseCases.GetAllDrillingEvents;

public class GetAllDrillingEventsUseCase: IGetAllDrillingEventsUseCase
{
    private readonly IDrillingEventRepository _drillingEventRepository;

    public GetAllDrillingEventsUseCase(IDrillingEventRepository drillingEventRepository)
    {
        _drillingEventRepository = drillingEventRepository ?? throw new ArgumentNullException(nameof(drillingEventRepository));
    }


    public async Task Execute(EmptyRequest request, IPresenter<GetAllDrillingEventsResponse> presenter)
    {
        var drillingEvents = await _drillingEventRepository.GetAll();
        presenter.Success(new GetAllDrillingEventsResponse(drillingEvents));
    }
}