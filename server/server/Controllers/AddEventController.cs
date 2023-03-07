using Domain.UseCases.AddDrillingEvent;
using Microsoft.AspNetCore.Mvc;
using Web.Host.Presenters;

namespace server.Controllers
{
    [ApiController]
    [Route("addEvent")]
    public class AddEventController : ControllerBase
    {

        private readonly IAddDrillingEventUseCase _useCase;

        public AddEventController(IAddDrillingEventUseCase useCase)
        {
            _useCase = useCase ?? throw new ArgumentNullException(nameof(useCase));
        }

        [HttpPut()]
        public async Task<ActionResult> Create(double startDepth,double endDepth,int eventNumber)
        {
            var request = new AddDrillingEventRequest(startDepth, endDepth, eventNumber);
            await _useCase.Execute(request);
            return new OkResult();
        }
    }
}