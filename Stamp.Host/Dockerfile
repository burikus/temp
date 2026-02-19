# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

EXPOSE 5011

RUN apt-get update && apt-get install -y \
    fonts-dejavu \
    fonts-liberation \
    curl \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*
COPY ./fonts /usr/share/fonts

# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["StampService/StampService.csproj", "StampService/"]

COPY ["StampService.Domain/StampService.Domain.csproj", "StampService.Domain/"]

COPY ["Infrastructure.Emails/Infrastructure.Emails.csproj", "Infrastructure.Emails/"]

COPY ["Infrastructure.Locking/Infrastructure.Locking.csproj", "Infrastructure.Locking/"]

COPY ["Infrastructure.Net.Http/Infrastructure.Net.Http.csproj", "Infrastructure.Net.Http/"]

COPY ["Domain/Domain.csproj", "Domain/"]

COPY ["ServiceConfiguration/ServiceConfiguration.csproj", "ServiceConfiguration/"]

COPY . .

#RUN for file in $(ls *.csproj); mv $file src/Infrastructure.Locking/EntityFramework/Npgsql/${Schema.sql}/; done

#COPY . .

RUN dotnet restore "StampService/StampService.csproj"
COPY . .

RUN dotnet build "StampService/StampService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "StampService/StampService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "StampService.dll"]
