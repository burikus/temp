#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app

EXPOSE 5010

RUN apt-get update && apt-get install -y \    
    curl \
    iputils-ping

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
#RUN apt-get update && apt-get install -y iputils-ping
WORKDIR /src

#COPY ["EzServer/.dockerignore", "EzServer/IdentityService/"]

COPY ["IdentityService/IdentityService.csproj", "IdentityService/"]

COPY ["IdentityService.Domain/IdentityService.Domain.csproj", "IdentityService.Domain/"]

COPY ["IdentityService.Messaging/IdentityService.Messaging.csproj", "IdentityService.Messaging/"]

COPY ["Infrastructure.Emails/Infrastructure.Emails.csproj", "Infrastructure.Emails/"]

COPY ["Infrastructure.Locking/Infrastructure.Locking.csproj", "Infrastructure.Locking/"]

COPY ["Infrastructure.Net.Http/Infrastructure.Net.Http.csproj", "Infrastructure.Net.Http/"]

COPY ["Domain/Domain.csproj", "Domain/"]

COPY ["ServiceConfiguration/ServiceConfiguration.csproj", "ServiceConfiguration/"]

COPY . .

#RUN for file in $(ls *.csproj); mv $file src/Infrastructure.Locking/EntityFramework/Npgsql/${Schema.sql}/; done

#COPY . .

RUN dotnet restore "IdentityService/IdentityService.csproj"
COPY . .

RUN dotnet build "IdentityService/IdentityService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "IdentityService/IdentityService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IdentityService.dll"]
