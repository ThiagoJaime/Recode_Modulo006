﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api_nasa.Context;
using api_nasa.Models;

namespace api_nasa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservasController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public ReservasController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Reservas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservas>>> GetReservas()
        {

            var reservas = await _context.Reservas
                  .Include(c => c.Cliente)
                  .Include(d => d.Destino)
                  .Include(p => p.Promocao)
                  .ToListAsync();

            return reservas;
           
        }

        // GET: api/Reservas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservas>> GetReservas(int id)
        {
            var reservas = await _context.Reservas
                     .Include(c => c.Cliente)
                     .Include(d => d.Destino)
                     .Include(p => p.Promocao)
                     .FirstOrDefaultAsync(r => r.Id == id);

            if (reservas == null)
            {
                return NotFound();
            }

            return reservas;
        }

        // PUT: api/Reservas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservas(int id, Reservas reservas)
        {
            if (id != reservas.Id)
            {
                return BadRequest();
            }

            _context.Entry(reservas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reservas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reservas>> PostReservas(Reservas reservas)
        {
          if (_context.Reservas == null)
          {
              return Problem("Entity set 'ApiDbContext.Reservas'  is null.");
          }
            _context.Reservas.Add(reservas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservas", new { id = reservas.Id }, reservas);
        }

        // DELETE: api/Reservas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservas(int id)
        {
            if (_context.Reservas == null)
            {
                return NotFound();
            }
            var reservas = await _context.Reservas.FindAsync(id);
            if (reservas == null)
            {
                return NotFound();
            }

            _context.Reservas.Remove(reservas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservasExists(int id)
        {
            return (_context.Reservas?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
