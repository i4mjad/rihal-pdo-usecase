namespace Domain.UseCases;

public interface IUseCase<TRequest, TResponse>
{
    Task Execute(TRequest request, IPresenter<TResponse> presenter);
}

public interface IUseCase<TRequest>
{
    Task Execute(TRequest request);
}


public class EmptyRequest
{
}

public class EmptyResponse
{
}