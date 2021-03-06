﻿using AutoMapper;
using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using static Financias.Domain.Enum.Enums;

namespace Financias.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GastosController : ControllerBase
    {
        private readonly IServiceGastos _serviceGastos;
        private readonly IMapper _mapper;

        public GastosController(IServiceGastos serviceGastos, IMapper mapper)
        {
            _serviceGastos = serviceGastos;
            _mapper = mapper;
        }

        [HttpGet("{mes}")]
        public async Task<IActionResult> BuscarTodos(string mes)
        {
            return Ok(await _serviceGastos.BuscarTodos(mes));
        }

        [HttpGet]
        [Route("obterPorId/{id}")]
        public async Task<IActionResult> BuscarPorId(int id)
        {
            return Ok(await _serviceGastos.BuscarPorId(id));
        }

        [HttpPost]
        public async Task<IActionResult> Cadastrar(GastosDadosDto gastosDadosDto)
        {
            Gastos gastosDados = _mapper.Map<GastosDadosDto, Gastos>(gastosDadosDto);
            try
            {
                return Ok(await _serviceGastos.Save(gastosDados));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Atualizar(GastosDadosDto gastosDadosDto)
        {
            Gastos gastosDados = _mapper.Map<GastosDadosDto, Gastos>(gastosDadosDto);
            try
            {
                return Ok(await _serviceGastos.Update(gastosDados));
            }catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPatch]
        public async Task<IActionResult> AtualizarSituacao(AtualizarSituacaoGastoDto atualizarSituacaoGastoDto)
        {
            return Ok(await _serviceGastos.AtualizarSituacao(atualizarSituacaoGastoDto));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar(int id)
        {
            try
            {
                return Ok(await _serviceGastos.Delete(id));
            }catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
