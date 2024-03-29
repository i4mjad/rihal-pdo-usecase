using System.Reflection;
using AutoMapper;
using Domain.MappingProfiles;
using Domain.Repositories;
using Domain.UseCases.AddDrillingEvent;
using Domain.UseCases.DeleteDrillingEvent;
using Domain.UseCases.GetAllDrillingEvents;
using Domain.UseCases.GetDrillingEvent;
using Domain.UseCases.UpdateDrillingEvent;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Web.Host.Presenters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IAddDrillingEventUseCase, AddDrillingEventUseCase>();
builder.Services.AddTransient<IUpdateDrillingEventUseCase, UpdateDrillingEventUseCase>();
builder.Services.AddTransient<IDeleteDrillingEventUseCase, DeleteDrillingEventUseCase>();
builder.Services.AddTransient<IGetDrillingEventUseCase, GetDrillingEventUseCase>();
builder.Services.AddTransient<IGetAllDrillingEventsUseCase, GetAllDrillingEventsUseCase>();


builder.Services.AddTransient(typeof(IRestPresenter<>), typeof(RestPresenter<>));

builder.Services.AddSingleton<IDrillingEventRepository, SqliteDrillingEventRepository>();

var mapperConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mapperConfig.CreateMapper();
builder.Services.AddSingleton(mapper);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
