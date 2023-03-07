using Microsoft.AspNetCore.Mvc;

namespace Web.Host.Presenters;

public class RestPresenter<TResponse>: IRestPresenter<TResponse>
{
    private TResponse _respone;
    
    public IActionResult Render()
    {
        return new ObjectResult(_respone);
    }
    

    public void Success(TResponse response)
    {
        _respone = response;
    }
}