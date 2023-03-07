using Domain.UseCases.AddDrillingEvent;
using Domain.UseCases.GetDrillingEvent;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace server.Controllers;

[ApiController]
[Route("getEvent")]
public class GetEventController : ControllerBase
{

    private readonly IGetDrillingEventUseCase _useCase;
    private readonly IRestPresenter<GetDrillingEventResponse> _presenter;
    public GetEventController(IGetDrillingEventUseCase useCase, IRestPresenter<GetDrillingEventResponse> presenter)
    {
        _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        _presenter = presenter ?? throw new ArgumentNullException(nameof(presenter));
    }

    [HttpGet()]
    public async Task<IActionResult> Get(Guid Id)
    {
        var request = new GetDrillingEventRequest(Id);
        await _useCase.Execute(request, _presenter);
        return _presenter.Render();
    }
}