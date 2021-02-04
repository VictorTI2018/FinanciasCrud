using Financias.Domain.Interfaces.Services;
using Financias.Services.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Infra.CrossCutting.IOC
{
    public static class ServicesDependency
    {
        public static void AddServicesDependency(this IServiceCollection services)
        {
            services.AddScoped<IServiceGastos, ServicesGastos>();
        }
    }
}
