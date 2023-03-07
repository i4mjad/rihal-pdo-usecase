using Domain.UseCases;
using Microsoft.AspNetCore.Mvc;

namespace Web.Host.Presenters;

public interface IRestPresenter<TResponse>: IPresenter<TResponse>
{
    public IActionResult Render();
}