using Domain.Entites;
using Domain.Repositories;

namespace Domain.UseCases.DeleteDrillingEvent;

public class DeleteDrillingEventUseCase: IDeleteDrillingEventUseCase
{
    private readonly IDrillingEventRepository _drillingEventRepository;

    public DeleteDrillingEventUseCase(IDrillingEventRepository drillingEventRepository)
    {
        _drillingEventRepository = drillingEventRepository ?? throw new ArgumentNullException(nameof(drillingEventRepository));
    }

    public async Task Execute(DeleteDrillingEventRequest request, IPresenter<EmptyResponse> presenter)
    {
        await _drillingEventRepository.Delete(request.Id);
        
    }
}