namespace Domain.UseCases.AddDrillingEvent;

public record AddDrillingEventRequest(double StartDepth, double EndDepth, int EventTypeNumber);