using AutoMapper;
using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Financias.Infra.Shared.AutoMapper
{
    public class DTOMapperProfile: Profile
    {
        public DTOMapperProfile()
        {
            CreateMap<GastosDadosDto, Gastos>();
            CreateMap<Gastos, GastosDadosDto>();

            CreateMap<GastoDto, Gastos>();
            CreateMap<Gastos, GastoDto>();
        }
    }
}
