using System;
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
    public class PromocoesController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public PromocoesController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Promocoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promocoes>>> GetPromocoes()
        {

            if (_context.Promocoes == null)
          {
              return NotFound();
          }
            return await _context.Promocoes.ToListAsync();
        }

        // GET: api/Promocoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Promocoes>> GetPromocoes(int id)
        {
          if (_context.Promocoes == null)
          {
              return NotFound();
          }
            var promocoes = await _context.Promocoes.FindAsync(id);

            if (promocoes == null)
            {
                return NotFound();
            }

            return promocoes;
        }

        // PUT: api/Promocoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPromocoes(int id, Promocoes promocoes)
        {
            if (id != promocoes.Id)
            {
                return BadRequest();
            }

            _context.Entry(promocoes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromocoesExists(id))
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

        // POST: api/Promocoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Promocoes>> PostPromocoes(Promocoes promocoes)
        {
          if (_context.Promocoes == null)
          {
              return Problem("Entity set 'ApiDbContext.Promocoes'  is null.");
          }
            _context.Promocoes.Add(promocoes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPromocoes", new { id = promocoes.Id }, promocoes);
        }

        // DELETE: api/Promocoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromocoes(int id)
        {
            if (_context.Promocoes == null)
            {
                return NotFound();
            }
            var promocoes = await _context.Promocoes.FindAsync(id);
            if (promocoes == null)
            {
                return NotFound();
            }

            _context.Promocoes.Remove(promocoes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromocoesExists(int id)
        {
            return (_context.Promocoes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
