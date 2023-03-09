using Domain.UseCases;
using Domain.UseCases.DeleteDrillingEvent;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace Web.Host.Controllers;

[ApiController]
[Route("deleteEvent/{id}")]
public class DeleteEventController : ControllerBase
{

    private readonly IDeleteDrillingEventUseCase _useCase;
    private readonly IRestPresenter<EmptyResponse> _presenter;
    public DeleteEventController(IDeleteDrillingEventUseCase useCase, IRestPresenter<EmptyResponse> presenter)
    {
        _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        _presenter = presenter ?? throw new ArgumentNullException(nameof(presenter));
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(Guid id)
    {
        var request = new DeleteDrillingEventRequest(id);
        await _useCase.Execute(request, _presenter);
        return _presenter.Render();
    }
}