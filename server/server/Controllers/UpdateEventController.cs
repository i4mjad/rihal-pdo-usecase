using System;
using System.Threading.Tasks;
using Domain.UseCases;
using Domain.UseCases.AddDrillingEvent;
using Domain.UseCases.UpdateDrillingEvent;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace Web.Host.Controllers;

[ApiController]
[Route("updateEvent/{id}")]
public class UpdateEventController : ControllerBase
{

    private readonly IUpdateDrillingEventUseCase _useCase;
    private readonly IRestPresenter<EmptyResponse> _presenter;

    public UpdateEventController(IUpdateDrillingEventUseCase useCase, IRestPresenter<EmptyResponse> presenter)
    {
        _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        _presenter = presenter ?? throw new ArgumentNullException(nameof(presenter));
    }

    [HttpPut()]
    public async Task<ActionResult> Update(Guid id, UpdateDrillingEventModel payload)
    {
        var request = new UpdateDrillingEventRequest(id, payload.StartDepth, payload.EndDepth, payload.EventNumber);
        await _useCase.Execute(request, _presenter);
        return new OkResult();
    }
}

public record UpdateDrillingEventModel(double StartDepth, double EndDepth, int EventNumber);