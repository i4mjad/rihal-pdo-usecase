namespace Domain.Entites;

public class DrillingEvent
{
    public DrillingEvent(Guid id, double startDepth, double endDepth, EventTypes eventTypesType)
    {
        Id = id;
        StartDepth = startDepth;
        EndDepth = endDepth;
        EventTypesType = eventTypesType;
    }

    public Guid Id { get; init; }
    public double StartDepth { get; set; }
    public double EndDepth { get; set; }
    public EventTypes EventTypesType { get; set; }
}