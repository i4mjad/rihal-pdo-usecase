using System.Data;
using AutoMapper;
using AutoMapper.Execution;
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
        var connectionString = $"Data Source={dbPath};";
        return new SqliteConnection(connectionString);
    }
    
    public async Task Create(DrillingEvent drillingEvent)
    {
        var drillingEventDataModel = _mapper.Map<DrillingEventDataModel>(drillingEvent);
        using var cnn = GetConnection();
        cnn.Open();
        const string sqlQuery = $"INSERT INTO DrillingEvents (Id, StartDepth, EndDepth, EventType) VALUES(@Id, @StartDepth, @EndDepth, @EventType)";
        await cnn.ExecuteAsync(sqlQuery, drillingEventDataModel);
        
    }
    
    public async Task<DrillingEvent> Get(Guid id)
    {
        using var cnn = GetConnection();
        cnn.Open();
        const string sqlQuery = "SELECT * FROM DrillingEvents Where Id = @Id";
        var drillingEventDataModels = await cnn.QueryAsync<DrillingEventDataModel>(sqlQuery, new { Id = id.ToString() });
        var drillingEvents = drillingEventDataModels.Select(x => _mapper.Map<DrillingEvent>(x));
        return drillingEvents.First();
    }

    public async Task<IEnumerable<DrillingEvent>> GetAll()
    {
        using var cnn = GetConnection();
        cnn.Open();
        const string sqlQuery = "SELECT * FROM DrillingEvents";
        var drillingEventDataModels = await cnn.QueryAsync<DrillingEventDataModel>(sqlQuery);
        var drillingEvents = drillingEventDataModels.Select(drillingEventDataModel => _mapper.Map<DrillingEvent>(drillingEventDataModel));
        return drillingEvents;
    }

    public async Task Update(DrillingEvent drillingEvent)
    {
        var drillingEventDataModel = _mapper.Map<DrillingEventDataModel>(drillingEvent);
        using var cnn = GetConnection();
        cnn.Open();
        const string sqlQuery = "UPDATE DrillingEvents " +
                                "SET " +
                                "StartDepth = @StartDepth, " +
                                "EndDepth = @EndDepth, " +
                                "EventType = @EventType " +
                                "WHERE Id = @Id";

        await cnn.ExecuteAsync(sqlQuery, drillingEventDataModel);
    }

    public async Task Delete(Guid id)
    {
        using var cnn = GetConnection();
        cnn.Open();
        var sqlQuery = $"DELETE from DrillingEvents WHERE Id = @{id}";
        await cnn.ExecuteAsync(sqlQuery);
    }
}