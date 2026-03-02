namespace Blog.Core.Services.Contracts
{
    public interface IProcessImageService
    {
        string ResizeBackground(string image, string contentType, decimal imageMaxSize);
    }
}
