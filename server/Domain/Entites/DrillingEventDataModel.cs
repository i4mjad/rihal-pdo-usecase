namespace Domain.Entites;

public class DrillingEventDataModel
{
    public string Id { get; init; }
    public double StartDepth { get; set; }
    public double EndDepth { get; set; }
    public int EventType { get; set; }
}