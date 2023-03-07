namespace Domain.UseCases.AddDrillingEvent;

public abstract record AddDrillingEventRequest(double StartDepth, double EndDepth, int EventTypeNumber);