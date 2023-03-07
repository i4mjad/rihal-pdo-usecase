using System.Data;
using AutoMapper;
using Dapper;
using Domain.Entites;
using Microsoft.Data.Sqlite;

namespace Domain.Repositories;

public class SqliteDrillingEventRepository: IDrillingEventRepository
{
    private readonly IMapper _mapper;

    public SqliteDrillingEventRepository(IMapper mapper)
    {
        _mapper = mapper;
    }

    private IDbConnection GetConnection()
    {
        var dbPath = Path.Combine(Environment.CurrentDirectory, "AppDb.db");
        var connectionString = string.Format("Data Source={0};", dbPath);
        return new SqliteConnection(connectionString);
    }
    
    public async Task Create(DrillingEvent drillingEvent)
    {
        var drillingEventDataModel = _mapper.Map<DrillingEventDataModel>(drillingEvent);
        using var cnn = GetConnection();
        cnn.Open();
        var sqlQuery = $"INSERT INTO DrillingEvents (Id, StartDepth, EndDepth, EventType) VALUES(@Id, @StartDepth, @EndDepth, @EventType)";
        await cnn.ExecuteAsync(sqlQuery, drillingEventDataModel);
        
    }
    
    public async Task<DrillingEvent> Get(Guid id)
    {
        using var cnn = GetConnection();
        cnn.Open();
        var sqlQuery = "SELECT * FROM DrillingEvents Where Id = @Id";
        var datamodels = await cnn.QueryAsync<DrillingEventDataModel>(sqlQuery, new { Id = id.ToString() });
        var domainModels = datamodels.Select(x => _mapper.Map<DrillingEvent>(x));
        return domainModels.First();
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
}