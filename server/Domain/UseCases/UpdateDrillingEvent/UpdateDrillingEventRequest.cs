using Domain.Entites;

namespace Domain.UseCases.UpdateDrillingEvent;

public record UpdateDrillingEventRequest(Guid Id, double StartDepth, double EndDepth, double EventNumber);