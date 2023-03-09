namespace Domain.Entites;

public class DrillingEvent
{
    public DrillingEvent(Guid id, double startDepth, double endDepth, EventTypes eventType)
    {
        Id = id;
        StartDepth = startDepth;
        EndDepth = endDepth;
        EventType = eventType;
    }

    public Guid Id { get; init; }
    public double StartDepth { get; set; }
    public double EndDepth { get; set; }
    public EventTypes EventType { get; set; }
}