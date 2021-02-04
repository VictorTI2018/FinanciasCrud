using AutoMapper;
using Financias.Domain.Dtos;
using Financias.Domain.Entities;
using Financias.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
    }
}
