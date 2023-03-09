using Domain.UseCases.GetDrillingEvent;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace Web.Host.Controllers;

[ApiController]
[Route("getEvent/{id}")]
public class GetEventController : ControllerBase
{

    private readonly IGetDrillingEventUseCase _useCase;
    private readonly IRestPresenter<GetDrillingEventResponse> _presenter;
    public GetEventController(IGetDrillingEventUseCase useCase, IRestPresenter<GetDrillingEventResponse> presenter)
    {
        _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        _presenter = presenter ?? throw new ArgumentNullException(nameof(presenter));
    }

    [HttpGet]
    public async Task<IActionResult> Get(Guid id)
    {
        var request = new GetDrillingEventRequest(id);
        await _useCase.Execute(request, _presenter);
        return _presenter.Render();
    }
}