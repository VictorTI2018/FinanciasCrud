using Financias.Domain.Interfaces.Repository;
using Financias.Infra.Data.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Infra.CrossCutting.IOC
{
    public static class RepositoryDependency
    {
        public static void AddRepositoryDependency(this IServiceCollection services)
        {
            services.AddScoped<IRepositoryGastos, RepositoryGastos>();
        }
    }
}
