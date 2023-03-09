using Domain.UseCases;
using Domain.UseCases.GetAllDrillingEvents;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace Web.Host.Controllers;

[ApiController]
[Route("getAllEvents")]
public class GetAllEventsController : ControllerBase
{

    private readonly IGetAllDrillingEventsUseCase _useCase;
    private readonly IRestPresenter<GetAllDrillingEventsResponse> _presenter;
    public GetAllEventsController(IGetAllDrillingEventsUseCase useCase, IRestPresenter<GetAllDrillingEventsResponse> presenter)
    {
        _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        _presenter = presenter ?? throw new ArgumentNullException(nameof(presenter));
    }

    [HttpGet()]
    public async Task<IActionResult> Get()
    {
        await _useCase.Execute(new EmptyRequest(), _presenter);
        return _presenter.Render();
    }
}