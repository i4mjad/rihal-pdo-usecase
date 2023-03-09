using Domain.Entites;

namespace Domain.UseCases.GetAllDrillingEvents;

public record GetAllDrillingEventsResponse(IEnumerable<DrillingEvent> DrillingEvents);