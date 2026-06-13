var builder = DistributedApplication.CreateBuilder(args);

var apiService = builder.AddProject<Projects.MyNivas_Api>("apiservice")
    .WithHttpHealthCheck("/health");

var myNivasApi = builder.AddProject<Projects.MyNivas_Api>("mynivas-api")
    .WithReference(apiService)
    .WaitFor(apiService);

//BFF
var server = builder.AddProject<Projects.MyNivas_Server>("mynivas-server")
    .WithReference(myNivasApi)
    .WaitFor(myNivasApi)
    .WithHttpHealthCheck("/alive")
    .WithExternalHttpEndpoints();

var web = builder.AddViteApp("web", "../frontend/mynivas.web")
    .WithNpm(install: true)
    .WithReference(server)
    .WaitFor(server)
    .WithHttpEndpoint(port: 3000)
    .WithExternalHttpEndpoints();
builder.Build().Run();
