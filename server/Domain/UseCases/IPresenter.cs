namespace Domain.UseCases;

public interface IPresenter<TResponse>
{
    public void Success(TResponse response);
}