using Domain.Entites;

namespace Domain.Repositories;

public interface IDrillingEventRepository
{
    Task<DrillingEvent> Get(Guid id);
    Task<IEnumerable<DrillingEvent>> GetAll();
    Task Update(DrillingEvent drillingEvent);
    Task Delete(Guid id);
    Task Create(DrillingEvent drillingEvent);
}