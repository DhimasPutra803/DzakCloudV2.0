/**
 * API Configuration
 * Configures requests to the Laravel backend API
 *
 * Development: Uses relative URLs proxied to Laravel (localhost:8000)
 * Production: Uses VITE_API_URL environment variable or absolute Laravel URL
 */

// Get API base URL from environment or use relative URLs for dev proxy
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Make API request to Laravel backend
 */
export async function apiRequest(endpoint: string, options?: RequestInit) {
  const url = `${API_BASE_URL}/api${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

export { API_BASE_URL };
