using System.Net;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace ServiceConfiguration.Base
{
    public abstract class HostBuilderConfigurationBase
    {
        private const string GrpcPortSection = "GrpcPort";
        private const string ApplicationPortSection = "ApplicationPort";

        protected static void ConfigureKestrelPorts(WebHostBuilderContext context, KestrelServerOptions options)
        {
            var grpcPort = int.Parse(context.Configuration[GrpcPortSection]);
            var appPort = int.Parse(context.Configuration[ApplicationPortSection]);

            options.Listen(IPAddress.Any, grpcPort, listenOptions =>
                listenOptions.Protocols = HttpProtocols.Http2);

            options.Listen(IPAddress.Any, appPort, listenOptions =>
                listenOptions.Protocols = HttpProtocols.Http1AndHttp2);
        }
    }
}
