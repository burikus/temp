using System;

using Microsoft.Extensions.Hosting;

using Serilog;

namespace ServiceConfiguration
{
    public sealed class ProgramConfiguration
	{
		//private static readonly HashSet<Type> ExcludedExceptions = new()
		//{
		//	typeof(System.ComponentModel.DataAnnotations.ValidationException),
		//	typeof(FluentValidation.ValidationException),
		//	typeof(EntityNotFoundException)
		//};

		public static Action<HostBuilderContext, LoggerConfiguration> ConfigureLogger()
		{
			return (hostBuilderContext, loggerConfiguration) =>
				loggerConfiguration
					.Enrich.FromLogContext()
					.MinimumLevel.Debug()	//TODO warning
					.WriteTo.Console();
		}
	}
}
