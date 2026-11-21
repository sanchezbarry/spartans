import {at, defineMigration, unset} from 'sanity/migrate'

/**
 * The "featured" toggle was removed from the post schema — the website now features
 * the latest post automatically. This clears the leftover values so the Studio
 * doesn't flag "Unknown field" on every existing post.
 *
 * Dry run:  npx sanity migration run remove-post-featured
 * Apply:    npx sanity migration run remove-post-featured --no-dry-run
 */
export default defineMigration({
  title: 'Remove manual "featured" flag from blog posts',
  documentTypes: ['post'],
  filter: 'defined(featured)',
  migrate: {
    document() {
      return at('featured', unset())
    },
  },
})
