using Domain.Entites;

namespace Domain.Repositories;

public class SqliteDrillingEventRepository: IDrillingEventRepository
{
    public Task<DrillingEvent> Get(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<DrillingEvent>> GetAll()
    {
        throw new NotImplementedException();
    }

    public Task Update(DrillingEvent drillingEvent)
    {
        throw new NotImplementedException();
    }

    public Task Delete(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task Create(DrillingEvent drillingEvent)
    {
        throw new NotImplementedException();
    }
}