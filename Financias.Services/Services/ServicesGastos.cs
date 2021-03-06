﻿using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Repository;
using Financias.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using static Financias.Domain.Enum.Enums;

namespace Financias.Services.Services
{
    public class ServicesGastos: ServicesBase<Gastos>, IServiceGastos
    {
        private readonly IRepositoryGastos _repositoryGastos;

        public ServicesGastos(IRepositoryGastos repositoryGastos) : base(repositoryGastos)
        {
            _repositoryGastos = repositoryGastos;
        }

        public async Task<List<GastosListaDto>> BuscarTodos(string mes)
        {
            return await _repositoryGastos.BuscarTodos(mes);
        }

        public async Task<GastoDto> BuscarPorId(int id)
        {
            return await _repositoryGastos.BuscarPorId(id);
        }

        public async Task<Gastos> AtualizarSituacao(AtualizarSituacaoGastoDto atualizarSituacaoGastoDto)
        {
            return await _repositoryGastos.AtualizarSituacao(atualizarSituacaoGastoDto);
        }
    }
}
